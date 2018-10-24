'use strict';

module.exports = function charTally(string) {
  const tallyMap = new Map();

  for (let i = 0; i < string.length; i++) {
    if (tallyMap.get(string.charAt(i))) {
      const value = tallyMap.get(string.charAt(i)) + 1;
      tallyMap.set(string.charAt(i), value);
    }
    if (!tallyMap.get(string.charAt(i))) {
      tallyMap.set(string.charAt(i), 1);
    }
  }
  return tallyMap;
};
