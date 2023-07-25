"use strict";
function intro(name, age) {
    return `My name is ${name} and age is ${age}`;
}
;
// function expression
const intro2 = function intro(name, age) {
    return `My name is ${name} and age is ${age}`;
};
//es6 Arrow function
const intro3 = (name, age) => {
    return `My name is ${name} and age is ${age}`;
};
/**
 * Default and optional Parameters
 */
// country is optional
const intro4 = (name, age, country) => {
    if (country) {
        return `My name is ${name}, age is ${age}  and I am from ${String}`;
    }
    return `My name is ${name} and age is ${age}`;
};
// console.log(intro4('john'))   Error: Expected 2 arguments but got 1
/**
 * Custom Parameters and Return type
 */
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["years"] = "Years";
    AgeUnit["months"] = "months";
})(AgeUnit || (AgeUnit = {}));
const person = {
    name: 'peter',
    age: 30.5,
    ageUnit: AgeUnit.years,
    country: 'IND'
};
function convertAgeToMonths(person) {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.months;
    return person;
}
console.log(convertAgeToMonths(person));
