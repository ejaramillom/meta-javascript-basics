// error handling

/* if we write the following, the last line never runs

console.log(a + b);
console.log('this line is never reached');

so we need to prevent errors to happen in the code

*/

try {
  throw new ReferenceError();
} catch(error) {
  console.log('there was an error');
  console.log('the error was saved in the error log');
};
console.log('My program does not stop');

// or similar

try {
  console.log(a + b);
} catch(error) {
  console.log('there was an error');
  console.log('the error was saved in the error log');
};
console.log('My program does not stop');

var addTwoNums = (a,b) => {
  try {
    if(typeof(a) != 'number') {
      throw new ReferenceError('the first argument is not a number');
    } else if (typeof(b) != 'number') {
      throw new ReferenceError('the second argument is not a number');
    } else {
      console.log(a + b);
    }
  } catch(err) {
    console.log("Error!", err);
  };
};
addTwoNums(5, "5");
console.log("It still works");