"use strict";
/**
 * Function call Signature
 */
var AgeUnit1;
(function (AgeUnit1) {
    AgeUnit1["years"] = "Years";
    AgeUnit1["months"] = "months";
})(AgeUnit1 || (AgeUnit1 = {}));
const person1 = {
    name: 'peter',
    age: 30.5,
    ageUnit: AgeUnit.years,
    country: 'IND',
    greet: (greeting => { return `${greeting} ${person1.name}`; })
};
console.log(person1.greet('Good Morning'));
const reserve = (departureDate, returnDateOrDepartingFrom, departingFromOrDestination, destination) => {
    if (returnDateOrDepartingFrom instanceof Date && destination) {
        return {
            departureDate: departureDate,
            returnDate: returnDateOrDepartingFrom,
            departingFrom: departingFromOrDestination,
            destination: destination
        };
    }
    else if (typeof returnDateOrDepartingFrom === 'string') {
        return {
            departureDate: departureDate,
            returnDate: returnDateOrDepartingFrom,
            destination: departingFromOrDestination
        };
    }
    throw new Error("Please provide valid details to reserve tickets.");
};
console.log(reserve(new Date(), new Date(), "New York", 'Washing tone'));
