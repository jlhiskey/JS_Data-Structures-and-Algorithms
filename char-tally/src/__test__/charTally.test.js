'use strict';

const charTally = require('../lib/charTally');

describe('testing whosYourDaddy()', () => {
  test('testing to see if an input of bob returns b:2, o:1', () => {
    const testMap = charTally('bob');
    expect(testMap.get('b'))
      .toEqual(2);
    expect(testMap.get('o'))
      .toEqual(1);
  });
  test('testing to see if an input of jar Jar returns j:1, J:1, a:2, r:2, space:1', () => {
    const testMap = charTally('jar Jar');
    expect(testMap.get('j'))
      .toEqual(1);
    expect(testMap.get('J'))
      .toEqual(1);
    expect(testMap.get('a'))
      .toEqual(2);
    expect(testMap.get('r'))
      .toEqual(2);
    expect(testMap.get(' '))
      .toEqual(1);
  });
  test('testing to see if an input of jar jar returns @:1, %:1, $:2, !:1, 7:1', () => {
    const testMap = charTally('@%$$!7');
    expect(testMap.get('@'))
      .toEqual(1);
    expect(testMap.get('%'))
      .toEqual(1);
    expect(testMap.get('$'))
      .toEqual(2);
    expect(testMap.get('7'))
      .toEqual(1);
  });
});
