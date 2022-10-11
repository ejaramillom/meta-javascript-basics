// rest operator uses spread operator to separate values of an array to an additional array without the need for choosing one by one the values

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

/* 

1
2
3, 4, 5, 6

*/

// the rest operator has to be the last parameter passed to the function for it to work properly

/*

It is ommonly used for:

Add new members to arrays without using the push() method

Convert a string to an array and

Copy either an object or an array into a separate object

*/