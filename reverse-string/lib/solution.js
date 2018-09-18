'use strict';

const solution = module.exports = {};

solution.insertMiddle = (arr, mid) => {
  const newArr = [];
  let midIdx = 0;

  if (arr.length % 2 === 0) {
    midIdx = (arr.length / 2);
    if (arr.length % 2 !== 0) {
      midIdx = ((arr.length / 2) + 0.5);
    }
    for (let i = 0; i <= arr.length; i++) {
      if (i === midIdx) {
        newArr[i] = mid;
      }
      if (i < midIdx) {
        newArr[i] = arr[i];
      }
      if (i > midIdx) {
        newArr[i] = arr[i - 1];
      }
    }
    return newArr;
  }
  return null;
};
