"use strict";
let person = {
    name: 'Mark',
    age: 24,
};
let car = {
    color: 'black',
    brand: 'Benz'
};
let article;
article = {
    author: 'Stella',
    content: 'Hello word!',
    title: 'My First article'
};
let article1 = {
    author: 'You',
    content: 'My content',
    title: 'My title',
    image: 'www.myImage.com'
};
let post = {
    author: 'Sam',
    content: 'Sam desc',
    title: 'Sam title',
    image: 'jack and jam'
};
const airplane = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    caterer: {
        name: 'Special Food Ltd',
        address: '484, Bangalore, Ind',
        phone: 1451234,
    },
};
let Dog = {
    name: 'baby',
    barks: true,
    wags: true
};
let cat = {
    name: 'Bella',
    purrs: true
};
function addNumberOrString(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
addNumberOrString(5, 10);
addNumberOrString('Mark', 10);
let myVehicle = {
    brand: 'audi',
    color: 'white',
    isExpensive: true,
    name: 'AudiQ8',
    owner: 'Mee'
};
let airIndia = {
    model: 'AIR178',
    flightNumber: 'AR934',
    timeOfDeparture: '01/05/2023',
    from: 'BLR',
    to: 'KDR',
    seats: {
        "10A": "Sham",
        "10B": "Dharma"
    }
};
