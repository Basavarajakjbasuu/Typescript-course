/**
 *  A 'Types' is a definition assigned to a value and defines the things that you can or cannot do with that "kind" of value
 */

let firstName: string = "Mark";

let len: number = firstName.length;

// let exponential = firstName.toExponential()  => its wrong

/**
 * TYPES In TYPESCRIPT
 */

/**
 * any
 * 
 * - Default type
 * - Can store any kind of value TS won't complain
 */

let myName: any = "Sham";

myName = 1234;
myName = [1, 2, 3];

function multiByTwo(number: any) {
  return number * 2;
}

/**
 * Unknown
 * 
 * - we don't no what will be the type we can use this
 * - Later we can test and apply rule
 */

function multiByThree(number: unknown) {
  if (typeof number === 'number') {
    return number * 3;
  }

  return "Please provide a valid number"
}

console.log(multiByThree(4)); // 12

console.log('john') // NaN
console.log('john') // Please provide a valid number

/**
 * Boolean
 */
 
let booleanValue: boolean = true;

// literal value
booleanValue = false;

//expression of true or false
booleanValue = typeof "abc" === 'string';
booleanValue = 1 > 0;

// booleanValue = {}; error: type null not assignable

// booleanValue = null; error: type null not assignable
// booleanValue = undefined; error: type null not assignable


/**
 * Number
 */

let number: number = 1000;
number = 26.6;
number = -230;

number = Infinity * .01;

number = parseInt('12');
// number = '122'; //error: Type 'string' is not assignable to Type89

/**
 * BigInt
 * 
 * - number can store 2^32 only
 * - If we need to use behind that limit can use BigInt
 */

//constructor function
let big2 = BigInt(9007199254099);

let bigInt2 = 1234455678n;

let a: bigint = BigInt(123344);

// let e: bigint = 233455.2n; error: A bigInt literal must be integer

/**
 * String
 * 
 * - Any value between single quote and double quotes
 */

let myPlace: string = 'Mysore';

myPlace.split('');

// myPlace = 123445