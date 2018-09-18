'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  reverseSearch(value) {
    if (!this.head) {
      return null;
    }
    if (this.head) {
      let counter = 0;
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
        counter += 1;
      }
      const steps = counter - value - 1;
      currentNode = this.head;
      for (let i = 0; i < steps; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.value;
    }
    return null;
  }
};
