"use strict";

var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 66];
numArray = numArray.filter(function (number) {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
});
console.log(numArray);