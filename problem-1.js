/*
 * Problem 1:
 */

function cubeNumber(number) {
    // Validation
    if (typeof number !== "number") {
        return "Error: Please input a valid number!";
    }

    // Mathematical calculation
    const cube = Math.pow(number, 3);
    return cube;
}

const number = 4;
const result = cubeNumber(number);
console.log(result);