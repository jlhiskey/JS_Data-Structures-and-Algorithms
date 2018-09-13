'use strict';

const solution = require('../lib/solution');

describe('#solution.js', () => {
  test('Testing that arr is reversed', () => {
    const output = solution.reverse_string(['1', '2', '3', '4']);
    expect(output).toEqual(['4', '3', '2', '1']);
  });
  test('Testing that arr is populated', () => {
    const output = solution.reverse_string([]);
    expect(output).toEqual(null);
  });
});
