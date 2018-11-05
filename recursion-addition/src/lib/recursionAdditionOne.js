'use strict';

module.exports = function recursionAdditionOne(arr) {
  if (arr.length > 1) {
    arr[0] += arr[1];
    arr.splice(1, 1);
    recursionAdditionOne(arr);
  }
  return arr;
};
