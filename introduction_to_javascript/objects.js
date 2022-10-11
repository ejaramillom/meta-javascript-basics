// 02 building blocks of a program; 01 arrays, objects and functions

var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
};

console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}

// nothing is preventing me to add mroe attributes to the object, although they have not been prevously defined for the object

house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}