/*
 * Problem 3:
 */

function sortMaker(arr) {
    let newArr = [];
    let num1 = arr[0];
    let num2 = arr[1];

    if (num1 === num2) {
        return "equal";
    }

    if (num1 < 0 || num2 < 0) {
        return "Invalid Input";
    } else {
        if (num1 < num2) {
            newArr.push(num2);
            newArr.push(num1);
        } else {
            newArr = arr;
        }
    }

    return newArr;
}

const numbers = [-4, -2];
const result = sortMaker(numbers);

console.log(result);