'use strict';

module.exports = function pawnKiller(chessBoard) {
  let pawnDeath = false;
  let bishopRow = null;
  let bishopColumn = null;
  let rowTracker = null;
  let columnTracker = null;

  // find the bishop
  for (let i = 0; i < chessBoard.length; i++) {
    for (let j = 0; j < chessBoard[i].length; j++) {
      if (chessBoard[i][j] === 'bishop') {
        bishopRow = i;
        bishopColumn = j;
        break;
      }
    }
  }
  // check if the bishop can kill the pawn
  if (bishopRow) {
    // check up and left for pawn
    if (pawnDeath === false) {
      rowTracker = bishopRow;
      columnTracker = bishopColumn;
      while (rowTracker >= 0 && columnTracker >= 0) {
        if (chessBoard[rowTracker][columnTracker] === 'pawn') {
          pawnDeath = true;
          break;
        }
        rowTracker -= 1;
        columnTracker -= 1;
      }
    }
    // check up and right for pawn
    if (pawnDeath === false) {
      rowTracker = bishopRow;
      columnTracker = bishopColumn;
      while (rowTracker <= 7 && columnTracker >= 0) {
        if (chessBoard[rowTracker][columnTracker] === 'pawn') {
          pawnDeath = true;
          break;
        }
        rowTracker += 1;
        columnTracker -= 1;
      }
    }
    // check down and left for pawn
    if (pawnDeath === false) {
      rowTracker = bishopRow;
      columnTracker = bishopColumn;
      while (rowTracker >= 0 && columnTracker <= 7) {
        if (chessBoard[rowTracker][columnTracker] === 'pawn') {
          pawnDeath = true;
          break;
        }
        rowTracker -= 1;
        columnTracker += 1;
      }
    }
    // check down and right for pawn
    if (pawnDeath === false) {
      rowTracker = bishopRow;
      columnTracker = bishopColumn;
      while (rowTracker <= 7 && columnTracker <= 7) {
        if (chessBoard[rowTracker][columnTracker] === 'pawn') {
          pawnDeath = true;
          break;
        }
        rowTracker += 1;
        columnTracker += 1;
      }
    }
  }
  return pawnDeath;
};
