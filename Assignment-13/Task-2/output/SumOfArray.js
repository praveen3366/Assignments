"use strict";

var add = function add(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
};

var arr = [33, 6, 9, 100];
var sum = add(arr);
console.log(sum);