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

  listZipper(linkedListOne, linkedListTwo) {
    // this handles neither list being populated
    if (!linkedListOne.head && !linkedListTwo.head) {
      throw new Error('__ERROR__ The lists are empty');
    }
    // this handles linkedListOne not being populated
    if (!linkedListOne.head) {
      return linkedListTwo;
    }
    // this handles linkedListTwo not being populated
    if (!linkedListTwo.head) {
      return linkedListOne;
    } 
    if (linkedListOne.head && linkedListTwo.head) {
      let targetOne = linkedListOne.head;
      let targetTwo = linkedListTwo.head;
      let helperOne = targetOne;
      let helperTwo = targetTwo;
      while (targetOne || targetTwo) {
        if (targetOne.next) {
          helperOne = targetOne.next;
        }
        if (targetTwo.next) {
          helperTwo = targetTwo.next;
        }
        if (targetOne.next && targetTwo.next) {
          targetOne.next = targetTwo;
          targetOne = helperOne;
          targetTwo.next = targetOne;
          targetTwo = helperTwo;
        }
        if (!targetOne.next) {
          targetOne.next = targetTwo;
          return linkedListOne;
        }
        if (!targetTwo.next) {
          helperOne = targetOne.next;
          targetOne.next = targetTwo;
          targetTwo.next = helperOne;
          return linkedListOne;
        }
      }
    } 
    return undefined; 
  }
};
