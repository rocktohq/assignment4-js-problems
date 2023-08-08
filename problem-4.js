/*
 * Problem 4:
 */

function findAddress(obj) {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    const address = street + "," + house + "," + society;

    return address;
}

console.log(findAddress({ street: 10, house: "15A",}));