'use strict';

const radixSort = require('../lib/radixSort');
const mergeSort = require('../lib/mergeSort');
const bubbleSort = require('../lib/bubbleSort');

describe('#threeSortingAlgorithms', () => {
  test('Testing bubbleSort', () => {
    bubbleSort([10, 10, 20, 75, 1]);
    expect(bubbleSort([10, 10, 20, 75, 1])).toEqual([1, 10, 10, 20, 75]);
  });
  test('Testing mergeSort', () => {
    mergeSort([10, 10, 20, 75, 1]);
    expect(mergeSort([10, 10, 20, 75, 1])).toEqual([1, 10, 10, 20, 75]);
  });
  test('Testing radixSort', () => {
    radixSort([10, 10, 20, 75, 1]);
    expect(radixSort([10, 10, 20, 75, 1])).toEqual([1, 10, 10, 20, 75]);
  });
});
