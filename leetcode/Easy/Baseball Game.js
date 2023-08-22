// Baseball Game

// You are keeping score fora baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect,
// future rounds! scores
// At the beginning of the game, you start with an empty record, You are given a list of strings ops, where opsti} is the ith operation you must
// apply to the record and is ane of the following

// 0. An integer x - Record a new score of x

// 0, *+* -Record a new score that is the sum of the prewous two scores. It Is guaranteed there will always be two previous scores

// 0. *p* -Record a new score that is double the prevous score. It is guaranteed there will aways be a previous score

// 0. *c* =Inwalidate the previous score, removing/t from the record. It is guaranteed there will always be a premous score.
// Return the sum of all the scores on the record.

// Example 1:

// Input: ops = ["5","2","C","D", "4"]

// output:30

// solution

var calPoints = function (ops) {
    let opsResult = []
    let lastNum, numBeforeLastNum, newNum
    let sum = 0;
    for (let i = 0; i < ops.length; i++) {
        const opValue = ops[i]
        if (opValue === "C") {
            let removedNum=opsResult.pop()
            sum -=removedNum 

        } else if (opValue === "D") {
            lastNum = opsResult[opsResult.length - 1];
            newNum = lastNum * 2
            sum += newNum
            opsResult.push(newNum)
            console.log(opsResult)

        } else if (opValue === "+") {
            lastNum = opsResult[opsResult.length - 1];
            numBeforeLastNum =opsResult[opsResult.length - 2]
            newNum = lastNum + numBeforeLastNum
            sum += newNum
            opsResult.push(newNum)
        } else {
            newNum= parseInt(ops[i])
            sum +=newNum
            opsResult.push(newNum)
        }
    }
    // for (let i = 0; i < opsResult.length; i++) { 
    //      sum += opsResult[i]
    //     }
        return sum
}

console.log(calPoints(["5", "2", "C", "D", "+"]))

 