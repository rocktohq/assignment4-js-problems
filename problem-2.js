/*
 * Problem 2:
 */

function matchFinder(string1, string2) {

    // Validation
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Error: Please input string only!";
    }

    // Matching block
    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}

const string1 = "Peter Parker";
const string2 = "ker";

const match = matchFinder(string1, string2);
console.log(match);