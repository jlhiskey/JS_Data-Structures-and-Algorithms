'use strict';

const bracketClosure = require('../lib/bracketClosure');

describe('testing whosYourDaddy()', () => {
  test('testing to see if closure with brackets is found', () => {
    bracketClosure('[({})]');

    expect(bracketClosure('[({})]'))
      .toEqual(true);
  });
  test('testing to see if closure with no brackets is found', () => {
    bracketClosure('test');

    expect(bracketClosure('test'))
      .toEqual(true);
  });
  test('testing to see if a father is found', () => {
    bracketClosure('{})');

    expect(bracketClosure('{})'))
      .toEqual(false);
  });
});
