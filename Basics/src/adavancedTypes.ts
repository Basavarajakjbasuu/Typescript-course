/**
 * Object
 */

let person = {
  name: 'Mark',
  age: 24,
};

let car: {
  color: string;
  brand: string;
} = {
  color: 'black',
  brand: 'Benz'
};




let article: {
  author: string;
  content: string;
  title: string;
  image?: string;
};

article = {
  author: 'Stella',
  content: 'Hello word!',
  title: 'My First article'
};

/**
 * Aliases
 * 
 */

type Article = {
  author: string;
  content: string;
  title: string;
  image?: string;
}

let article1: Article = {
  author: 'You',
  content: 'My content',
  title: 'My title',
  image: 'www.myImage.com'
}

let post: Article = {
  author: 'Sam',
  content: 'Sam desc',
  title: 'Sam title',
  image: 'jack and jam'
}

// Exercises 01

type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  caterer: Caterer
}

const airplane: Airplane = {
  model: "Airbus A380",
  flightNumber: "A2201",
  timeOfDeparture: new Date(),
  caterer: {
    name: 'Special Food Ltd',
    address: '484, Bangalore, Ind',
    phone: 1451234,
  },
}

type Caterer = {
  name: string;
  address: string;
  phone: number
}

/**
 * Union Type
 * 
 * - combination of common properties
 */

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean
}

type Cat = {
  name: string;
  purrs: boolean
}

type DogAndCatUnion = Dog | Cat;

let Dog: DogAndCatUnion = {
  name: 'baby',
  barks: true,
  wags: true
}

let cat: DogAndCatUnion = {
  name: 'Bella',
  purrs: true
}

//Example 01

type stringOrNumber = string | number;

function addNumberOrString(a: stringOrNumber, b: stringOrNumber) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return a.toString() + b.toString();
  } 
}

addNumberOrString(5, 10); // 15
addNumberOrString('Mark', 10); // Mark10
// addNumberOrString('sham', null) Error: null is not assign to number


/**
 * Intersection
 * 
 * - Intersection of common type and unique types of each one
 */

type Car = {
  name: string;
  brand: string;
  isExpensive: boolean;
}

type Bike = {
  name: string;
  owner: string,
  color: string;
}

type HybridVehicle = Car & Bike;

let myVehicle: HybridVehicle = {
  brand: 'audi',
  color: 'white',
  isExpensive: true,
  name: 'AudiQ8',
  owner: 'Mee'
}

/**
 * Index Signatures
 * 
 * 
 */

type Airplane2 = {
  model: string;
  flightNumber: string;
  timeOfDeparture: string;
  from: string;
  to: string;
  seats: {
    
    [key: string ]: string 
  };
};

let airIndia: Airplane2 = {
  model: 'AIR178',
  flightNumber: 'AR934',
  timeOfDeparture: '01/05/2023',
  from: 'BLR',
  to: 'KDR',
  seats: {
    "10A": "Sham",
    "10B": "Dharma"
  }
}