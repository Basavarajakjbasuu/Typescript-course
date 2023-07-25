function intro(name: string, age: number): string {
  return `My name is ${name} and age is ${age}`;
};

// function expression
const intro2 = function intro(name: string, age: number): string {
  return `My name is ${name} and age is ${age}`;
};

//es6 Arrow function

const intro3 = (name: string, age: number): string => {
  return `My name is ${name} and age is ${age}`;
}

/**
 * Default and optional Parameters
 */

// country is optional
const intro4 = (name: string, age: number, country?: string): string => {

  if (country) {
    return `My name is ${name}, age is ${age}  and I am from ${String}`;
  }
  return `My name is ${name} and age is ${age}`;
}

// console.log(intro4('john'))   Error: Expected 2 arguments but got 1

/**
 * Custom Parameters and Return type
 */

enum AgeUnit {
  years = "Years",
  months = "months",
}

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
}

const person: Person = {
  name: 'peter',
  age: 30.5,
  ageUnit: AgeUnit.years,
  country: 'IND'
}

function convertAgeToMonths(person: Person): Person {
  
  person.age = person.age * 12;
  person.ageUnit = AgeUnit.months;

  return person;
}

console.log(convertAgeToMonths(person)); 