/*
 * Problem 5:
 */

function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Error: Array of khuchra taka can not be empty!";
    }

    let sum = 0;
    for (item of changeArray) {
        sum += item;
    }

    if (totalDue <= sum) {
        return true;
    } else return false;
}

const output = canPay([1, 5, 5], 10);
console.log(output);