// bugs and errors

var addNums = (a, b) => {
  console.log(a + b);
};

addNums('first', 3);

console.log('Still running, but there is a bug');

// type error: (5).pop is a TypeError, pop is not a function, because pop is a function for arrays, not for numbers