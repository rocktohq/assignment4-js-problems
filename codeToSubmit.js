// Problem 1
function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Error: Please input a valid number!";
    }

    const cube = Math.pow(number, 3);
    return cube;
}

// Problem 2
function matchFinder(string1, string2) {

    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Error: Please input string only!";
    }

    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}

// Problem 3
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

// Problem 4
function findAddress(obj) {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    const address = street + "," + house + "," + society;
    return address;
}

// Problem 5
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