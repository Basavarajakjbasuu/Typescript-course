/**
 * Function call Signature
 */

enum AgeUnit1 {
  years = "Years",
  months = "months",
}

type greetingFunction = (greeting: string) => string;

type Person1 = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
  // greet: Function;
  greet: greetingFunction;
}

const person1: Person1 = {
  name: 'peter',
  age: 30.5,
  ageUnit: AgeUnit.years,
  country: 'IND',
  greet:(greeting => { return  `${greeting} ${person1.name}`})
}

console.log(person1.greet('Good Morning'));

/**
 * Function overloading
 */

type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
}

// type Reserve = (
//   departureDate: Date,
//   returnDate: Date,
//   departingFrom: string,
//   destination: string,
// ) => Reservation

type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string,
  ): Reservation | never;
  (
    departureDate: Date,
    departingFrom: string,
    destination: string,
  ): Reservation | never;
}

const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => { 
  if ( returnDateOrDepartingFrom instanceof Date && destination ) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination
    }
  } else if ( typeof returnDateOrDepartingFrom === 'string'){
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      destination: departingFromOrDestinationB
    };
  }

  throw new Error ("Please provide valid details to reserve tickets.")

};

console.log(reserve(new Date(), new Date(),  "New York", 'Washing tone'))