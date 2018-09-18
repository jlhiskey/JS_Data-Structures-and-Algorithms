'use strict';

const solution = require('../lib/solution');

describe('#solution.js', () => {
  test('Testing that newArr is adding mid', () => {
    const output = solution.reverse_string(['1', '2', '3', '4'], '9');
    expect(output).toEqual(['1', '2', '9', '3', '4']);
  });
  test('Testing that arr is populated with more than 1 value', () => {
    const output = solution.reverse_string(['1']);
    expect(output).toEqual(null);
  });
});
