'use strict';

const merge = (preSortedLeft, preSortedRight) => {
  const result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < preSortedLeft.length && indexRight < preSortedRight.length) {
    if (preSortedLeft[indexLeft] < preSortedRight[indexRight]) {
      result.push(preSortedLeft[indexLeft]);
      indexLeft += 1;
    } else {
      result.push(preSortedRight[indexRight]);
      indexRight += 1;
    }
  }
  // This will chop that data off of the preSorted arrays so that they don't waste memory.
  return result.concat(preSortedLeft.slice(indexLeft)).concat(preSortedRight.slice(indexRight));
};

module.exports = function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const middleIndex = Math.floor(array.length / 2);
  const leftValues = array.slice(0, middleIndex);
  const rightValues = array.slice(middleIndex);

  return merge(mergeSort(leftValues), mergeSort(rightValues));
};
