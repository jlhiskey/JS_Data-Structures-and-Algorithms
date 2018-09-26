'use strict';

module.exports = class Stack {
  constructor() {
    this._storage = [];
  }

  pop() {
    return this._storage.pop();
  }

  push(value) {
    this._storage.push(value);
  }
};
