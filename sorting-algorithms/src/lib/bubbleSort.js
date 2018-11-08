'use strict';

module.exports = function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < (array.length - i - 1); j++) {
      if (array[j] > array[j + 1]) {
        const helper = array[j];
        array[j] = array[j + 1];
        array[j + 1] = helper;
      }
    }
  }
  return array;
};
