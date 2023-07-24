"use strict";
let firstName = "Mark";
let len = firstName.length;
let myName = "Sham";
myName = 1234;
myName = [1, 2, 3];
function multiByTwo(number) {
    return number * 2;
}
function multiByThree(number) {
    if (typeof number === 'number') {
        return number * 3;
    }
    return "Please provide a valid number";
}
console.log(multiByThree(4));
console.log('john');
