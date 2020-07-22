"use strict";

var _chunk = function _chunk(arr, chunkSize) {
  var chunkedArray = [];
  var arraylength = arr.length;

  for (var k = 0; k < arraylength; k = k + chunkSize) {
    if (arr.length - k == 1) {
      var temp1 = [arr[arraylength - 1]];
      chunkedArray.push(temp1);
    } else {
      var temp = [];

      for (var i = k; i < k + chunkSize; i++) {
        temp[i - k] = arr[i];
      }

      chunkedArray.push(temp);
    }
  }

  return chunkedArray;
};

console.log(_chunk(['1', '2', '3', '4', '5', '6', '7'], 2));