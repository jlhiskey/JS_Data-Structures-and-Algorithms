'use strict';

const recursionAdditionOne = require('../lib/recursionAdditionOne');
const recursionAdditionTwo = require('../lib/recursionAdditionTwo');

describe('#twoRecursiveAdditionFunctions', () => {
  test('Testing function one', () => {
    recursionAdditionOne([1, 2, 3]);
    expect(recursionAdditionOne([1, 2, 3])).toEqual([6]);
  });
  test('Testing function two', () => {
    recursionAdditionTwo([1, 2, 3]);
    expect(recursionAdditionTwo([1, 2, 3])).toEqual(6);
  });
});
