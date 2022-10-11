// how do you represent data? objects, arrays, maps and sets

// objects: key - value pairs

const car = {
  owner: 'john',
  color: 'red',

  engineOn: function() {
    console.log('engine started');
  }
}

// arrays: collection of data

const numbers = [1, 4, 7, 3, 9];

// map: key - value pair where any value can be used as a key. In objects, keys can only be strings or symbols

// set: is another data structures where every entry must be unique

const houseOne = 'red';
const houseTwo = 'black';
const houseThree = 'red';

const houses = new Set();

houses.add(houseOne).add(houseTwo).add(houseThree);

console.log(houses);

/*

 Working with Maps in JavaScript

To make a new Map, you can use the Map constructor:

new Map();

A map can feel very similar to an object in JS.

However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

For example:

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

Here's the console output:

Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

To get a specific value, you need to use the get() method. For example:

bestBoxers.get(1); // 'The Champion'

*/