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

  listZipper(ll1, ll2) {
    if (!ll1.head) {
      throw new Error('__ERROR__ The list is empty');
    }
    let targetOne = ll1.head;
    let targetTwo = ll2.head;
    let helperOne = '';
    let helperTwo = '';
    while (targetOne.next || targetTwo.next) {
      helperOne = targetOne.next;
      targetOne.next = targetTwo;
      targetOne = helperOne;
      helperTwo = targetTwo.next;
      targetTwo.next = targetOne;
      targetTwo = helperTwo;
    }
    return ll1;
  }
};
