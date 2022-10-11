// how to avoid infinite loops

// const example = () => {
//   console.log('line one');
//   console.log('line two');
//   console.log('line three');
//   example();
// };

// console.log(example());

// this is an infinite loop, to avoid writing it, put a counter

let counter = 3;

const example = () => {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  example();
};

example();