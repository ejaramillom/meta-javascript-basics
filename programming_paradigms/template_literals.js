// Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the JavaScript language. Essentially, using template literals allows programmers to embed variables directly in between the backticks, without the need to use the + operator and the single or double quotes to delimit string literals from variables. They also allow for expression evaluation.

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`)

// when using template literals, multi line string is supported

let multiLine = `using ES6
  we can create
  multi line
  strings`
;

console.log(multiLine);

