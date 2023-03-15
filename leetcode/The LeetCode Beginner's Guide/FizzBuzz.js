// problem
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// solution

function fizzBuzz(n) {
    let result = []

    for (let i = 1; i <= n; i++) {
        let string = ''
        if (i % 3 === 0) string += 'Fizz'
        if (i % 5 === 0) string += 'Buzz'

        if (string === '') string += i
        result.push(string)
    }

    return result
}
