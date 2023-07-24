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
  caterer: {
    name: string;
    address: string;
    phone: number
  }
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

