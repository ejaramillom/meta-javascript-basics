var bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true
}

var eagleOne = Object.create(bird);

// every object instance in javascript inherits from the prototype Object

console.log('eagle one', eagleOne);

console.log("eagle one has wings:", eagleOne.hasWings);

var penguinOne = Object.create(bird);
penguinOne.canFly = false;

console.log("penguin one can fly:", penguinOne.canFly);

// when using Object.create an empty object is created, but it has the same methods of the prototype, and you can override its behavior and attributes

// when using new, we create a new instance of the class and inherits the prototype default variables
