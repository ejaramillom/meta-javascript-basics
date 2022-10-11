// introduction to javascript: 03 conditionals and loops

console.log('this is a while loop');

var counter = 3;

while (counter > 0) {
  console.log(counter);
  counter -= 1;
};

// for loop

console.log('this is a for loop');

for (i = 1; i < 6; i++) {
  console.log(i);
};

console.log('count completed!');

// nested loops can be used in cases such as week 1 - monday, week 2 - monday

for (var year = 2023; year < 2025; year++) {
  console.log(year);
  
  for(var month = 6; month < 9; month++) {
    console.log('-----------', month);
  };
};