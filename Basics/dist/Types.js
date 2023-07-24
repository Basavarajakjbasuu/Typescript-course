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
console.log('john');
let booleanValue = true;
booleanValue = false;
booleanValue = typeof "abc" === 'string';
booleanValue = 1 > 0;
let number = 1000;
number = 26.6;
number = -230;
number = Infinity * .01;
number = parseInt('12');
let big2 = BigInt(9007199254099);
let bigInt2 = 1234455678n;
let a = BigInt(123344);
let myPlace = 'Mysore';
myPlace.split('');
