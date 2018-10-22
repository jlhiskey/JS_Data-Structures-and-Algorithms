'use strict';

module.exports = function bracketClosure(string) {
  let closure = true;
  let curlyCounterLeft = 0;
  let curlyCounterRight = 0;
  let parensCounterLeft = 0;
  let parensCounterRight = 0;
  let squareCounterLeft = 0;
  let squareCounterRight = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string.charAt(i)) {
      case '{': curlyCounterLeft += 1;
        break;
      case '}': curlyCounterRight += 1;
        break;
      case '[': squareCounterLeft += 1;
        break;
      case ']': squareCounterRight += 1;
        break;
      case '(': parensCounterLeft += 1;
        break;
      case ')': parensCounterRight += 1;
        break;
      default: closure = true;
    }
  }
  if (curlyCounterRight !== curlyCounterLeft) {
    closure = false;
  }
  if (parensCounterRight !== parensCounterLeft) {
    closure = false;
  }
  if (squareCounterRight !== squareCounterLeft) {
    closure = false;
  }
  return closure;
};
