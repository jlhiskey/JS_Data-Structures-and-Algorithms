'use strict';

module.exports = function recursionAdditionTwo(arr, counter = arr.length) {
  if (counter > 1) {
    arr[0] += arr[counter - 1];
    recursionAdditionTwo(arr, counter - 1);
  }
  return arr[0];
};
