'use strict';

const solution = module.exports = {};

solution.reverse_string = (arr) => {
  let array = arr;
  if (arr.length > 0) {
    const revArr = array;
    array = [];
    for (let i = 0; i < revArr.length; i++) {
      array[i] = revArr[(revArr.length - 1) - i];
    }
    return array;
  }
  return null;
};
