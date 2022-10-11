/*
programming paradigms are like forms os speaking, people in university talk formal, while people on street talks informal or slang

programming paradigms are simply a way to express programming, it is just a way to express the implementation of code, there is no one better than the other

*/

// functional programming

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

const convertCurrency = (amount, rate) => {
  return amount * rate;
};

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);
