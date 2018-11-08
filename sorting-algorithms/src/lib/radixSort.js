'use strict';

module.exports = function radixSort(array) {
  const base = 10; // allows for base 10 integers.
  let divider = 1; // starts in the ones place
  let maxValue = Number.NEGATIVE_INFINITY; // allows for huge numbers.
  let results = [];

  while (divider === 1 || divider <= maxValue) { // will run until divider > biggest int in array
    const buckets = [...Array(10)].map(() => []); // created a map with 10 containers
    for (let i = 0; i < array.length; i++) { // will look at target int inside of large int of each
      buckets[Math.floor((array[i] / divider) % base)].push(array[i]); // places big int into bucket
      if (array[i] > maxValue) { // keeps track of the max value found.
        maxValue = array[i];
      }
    }
    results = [].concat(...buckets); // pushes the big int's into the results array.
    divider *= base; // adjusts the divider to look at the next integer position.
  }
  return results; // once the while loop stops results will be sorted.
};
