'use strict';

const pawnKiller = require('../lib/pawnKiller');

describe('testing whosYourDaddy()', () => {
  test('testing to see if kill is confirmed', () => {
    const chessBoardKill = [['A', 1, 2, 3, 4, 5, 6, 7], ['B', 1, 2, 3, 4, 5, 6, 7], ['C', 1, 2, 3, 4, 5, 6, 7], ['D', 1, 2, 3, 'bishop', 5, 6, 7], ['E', 1, 2, 3, 4, 5, 6, 7], ['F', 1, 'pawn', 3, 4, 5, 6, 7], ['G', 1, 2, 3, 4, 5, 6, 7], ['H', 1, 2, 3, 4, 5, 6, 7]];
    pawnKiller(chessBoardKill);
    expect(pawnKiller(chessBoardKill))
      .toEqual(true);
  });
  test('testing to see if survival is confirmed', () => {
    const chessBoardLive = [['A', 1, 2, 3, 4, 5, 6, 7], ['B', 1, 2, 3, 4, 5, 6, 7], ['C', 1, 2, 3, 4, 5, 6, 7], ['D', 1, 2, 3, 'bishop', 5, 6, 7], ['E', 1, 2, 3, 4, 5, 6, 7], ['F', 1, 2, 3, 4, 5, 6, 7], ['G', 1, 'pawn', 3, 4, 5, 6, 7], ['H', 1, 2, 3, 4, 5, 6, 7]];
    pawnKiller(chessBoardLive);
    expect(pawnKiller(chessBoardLive))
      .toEqual(false);
  });
  test('testing to see survival is confirmed if there is no bishop', () => {
    const chessBoardNoBishop = [['A', 1, 2, 3, 4, 5, 6, 7], ['B', 1, 2, 3, 4, 5, 6, 7], ['C', 1, 2, 3, 4, 5, 6, 7], ['D', 1, 2, 3, 4, 5, 6, 7], ['E', 1, 2, 3, 4, 5, 6, 7], ['F', 1, 2, 3, 4, 5, 6, 7], ['G', 1, 'pawn', 3, 4, 5, 6, 7], ['H', 1, 2, 3, 4, 5, 6, 7]];
    pawnKiller(chessBoardNoBishop);
    expect(pawnKiller(chessBoardNoBishop))
      .toEqual(false);
  });
});
