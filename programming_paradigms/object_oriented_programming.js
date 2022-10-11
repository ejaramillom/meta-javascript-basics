/*
programming paradigms are like forms os speaking, people in university talk formal, while people on street talks informal or slang

programming paradigms are simply a way to express programming, it is just a way to express the implementation of code, there is no one better than the other

*/

// object oriented programming

// in functional programming, data is separate from functions, in object oriented programming, data is inside the functions

// functions inside objects are called methods

// this is an example where the elements i am using to calculate are outside the functions. This is functional programming.

var shoes = 100;
var stateTax = 1.2;

const totalPrice = (shoes, tax) => {
  return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);

console.log('Functional programming', toPay);

// then we shall build something similar in oop

var purchaseOne = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function() {
    var calculation = this.shoes * this.stateTax;
    console.log('OOP', 'Total price', calculation)
  }
}

purchaseOne.totalPrice();