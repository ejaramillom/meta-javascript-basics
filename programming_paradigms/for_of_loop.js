// To begin, it's important to know that a for of loop cannot work on an object directly, since an object is not iterable . For example: 

const car = {
    speed: 100,
    color: "blue"
}

try {
  for(prop of car) {
    console.log(prop);
  } 
} catch {
  console.log('there was an error, objects cannot be iterated');
}

// but arrays are iterable

const colors = ['red','orange','yellow']

for (var color of colors) {
    console.log(color);
}

// to loop on objects, you need an array of objects, and use these built in functions

/*

Object.keys()

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // 

['speed','color']

Object.values()

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // 

[300, 'yellow']

Object.entries()

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); //

[ ['speed', 400], ['color', 'magenta'] ]

*/

// example

var clothingItem = {
  price: 50,
  color: 'beige',
  material: 'cotton',
  season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
  console.log(key, ":", clothingItem[key])
}

// when is for - in reliable and when is for - of

const car = {
  engine: true,
  steering: true,
  speed: 'slow'
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object is: ", sportsCar);

console.log('----- for-in is unreliable -----');
// this loop is unreliable because it iterates on its prototype, not only on the instance
for (props in sportsCar) {
  console.log(prop);
}
console.log('😑', 'Iterating over object AND its prototype');

console.log('-----for-of is reliable-----');
for (prop of Object.keys(sportsCar)) {
  console.log(prop + ": " + sportsCar[prop]);
}
console.log('😑', "Iterating over object's own properties ONLY!")

// notes about thing = new Object and Object.create

/*



*/